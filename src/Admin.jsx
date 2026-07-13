import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaUsers,
  FaTicketAlt,
  FaRupeeSign,
  FaTrash,
  FaCheck,
} from "react-icons/fa";

function Admin() {
  const [bookings, setBookings] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  // Load bookings from LocalStorage on component mount
  useEffect(() => {
    const savedBookings =
      JSON.parse(localStorage.getItem("waterpark_bookings")) || [];
    setBookings(savedBookings);
  }, []);

  // Update Booking Status (e.g., Pending to Confirmed)
  const updateStatus = (id, newStatus) => {
    const updatedBookings = bookings.map((booking) =>
      booking.id === id ? { ...booking, status: newStatus } : booking,
    );
    setBookings(updatedBookings);
    localStorage.setItem("waterpark_bookings", JSON.stringify(updatedBookings));
  };

  // Delete Booking
  const deleteBooking = (id) => {
    if (window.confirm("Are you sure you want to delete this booking?")) {
      const updatedBookings = bookings.filter((booking) => booking.id !== id);
      setBookings(updatedBookings);
      localStorage.setItem(
        "waterpark_bookings",
        JSON.stringify(updatedBookings),
      );
    }
  };

  // Calculate Dashboard Stats
  const totalRevenue = bookings.reduce((sum, b) => sum + (b.total || 0), 0);
  const totalBookings = bookings.length;
  const confirmedBookings = bookings.filter(
    (b) => b.status === "confirmed",
  ).length;

  return (
    <div className="admin-container">
      {/* Mobile Header */}
      <div className="admin-mobile-header">
        <h2>Admin Panel</h2>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`admin-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-logo">
          <h2>Water Park</h2>
          <p>Admin Dashboard</p>
        </div>
        <ul className="sidebar-menu">
          <li className="active">Dashboard</li>
          <li>Bookings</li>
          <li>Settings</li>
          <li
            onClick={() => navigate("/")}
            style={{
              marginTop: "auto",
              borderTop: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            ⬅ Back to Website
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="admin-main">
        <div className="admin-header">
          <h1>Dashboard Overview</h1>
          <p>Welcome back, Admin!</p>
        </div>

        {/* Stats Grid */}
        <div className="admin-stats-grid">
          <div className="admin-stat-card">
            <div
              className="stat-icon"
              style={{ background: "rgba(0, 191, 255, 0.1)", color: "#00bfff" }}
            >
              <FaRupeeSign />
            </div>
            <div className="stat-details">
              <h3>₹{totalRevenue.toLocaleString("en-IN")}</h3>
              <p>Total Revenue</p>
            </div>
          </div>

          <div className="admin-stat-card">
            <div
              className="stat-icon"
              style={{
                background: "rgba(37, 211, 102, 0.1)",
                color: "#25D366",
              }}
            >
              <FaTicketAlt />
            </div>
            <div className="stat-details">
              <h3>{totalBookings}</h3>
              <p>Total Bookings</p>
            </div>
          </div>

          <div className="admin-stat-card">
            <div
              className="stat-icon"
              style={{ background: "rgba(255, 138, 0, 0.1)", color: "#FF8A00" }}
            >
              <FaUsers />
            </div>
            <div className="stat-details">
              <h3>{confirmedBookings}</h3>
              <p>Confirmed</p>
            </div>
          </div>
        </div>

        {/* Bookings Table */}
        <div className="admin-table-container">
          <div className="table-header">
            <h2>Recent Bookings</h2>
            <button
              onClick={() =>
                setBookings([]) || localStorage.removeItem("waterpark_bookings")
              }
            >
              Clear All Data
            </button>
          </div>

          {bookings.length > 0 ? (
            <div className="table-responsive">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Customer Name</th>
                    <th>Phone</th>
                    <th>Visit Date</th>
                    <th>Package</th>
                    <th>Total (₹)</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr key={booking.id}>
                      <td>{booking.bookingDate}</td>
                      <td style={{ fontWeight: "bold" }}>{booking.name}</td>
                      <td>{booking.phone}</td>
                      <td>{booking.date}</td>
                      <td>
                        {booking.type === "individual"
                          ? `Ind. (A:${booking.adult}, C:${booking.child})`
                          : `Family Pack`}
                      </td>
                      <td style={{ fontWeight: "bold", color: "#00bfff" }}>
                        ₹{booking.total}
                      </td>
                      <td>
                        <span className={`status-badge ${booking.status}`}>
                          {booking.status.toUpperCase()}
                        </span>
                      </td>
                      <td style={{ display: "flex", gap: "10px" }}>
                        {booking.status === "pending" && (
                          <button
                            title="Confirm"
                            onClick={() =>
                              updateStatus(booking.id, "confirmed")
                            }
                            style={{
                              background: "#25D366",
                              color: "#fff",
                              border: "none",
                              padding: "8px",
                              borderRadius: "5px",
                              cursor: "pointer",
                            }}
                          >
                            <FaCheck />
                          </button>
                        )}
                        <button
                          title="Delete"
                          onClick={() => deleteBooking(booking.id)}
                          style={{
                            background: "#e52e71",
                            color: "#fff",
                            border: "none",
                            padding: "8px",
                            borderRadius: "5px",
                            cursor: "pointer",
                          }}
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="admin-placeholder">
              <h2>No Bookings Found!</h2>
              <p>
                When users book tickets from the website, they will appear here.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Admin;
