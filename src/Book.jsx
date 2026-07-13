import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

function Book() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  const [ticketType, setTicketType] = useState("individual"); // "individual" or "family"

  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);

  const [familyAdult, setFamilyAdult] = useState(0);
  const [familyChild, setFamilyChild] = useState(0);

  const adultPrice = 800;
  const childPrice = 500;
  const familyPrice = 3500;

  const familyPack = ticketType === "family" ? 1 : 0;

  const adultTotal = ticketType === "individual" ? adult * adultPrice : 0;
  const childTotal = ticketType === "individual" ? child * childPrice : 0;
  const familyTotal = ticketType === "family" ? familyPrice : 0;

  const maxFamilyMembers = 5;
  const currentFamilyMembers = familyAdult + familyChild;
  const familyValid =
    currentFamilyMembers > 0 && currentFamilyMembers <= maxFamilyMembers;

  const total = adultTotal + childTotal + familyTotal;

  const upiLink = `upi://pay?pa=nilsanghani43@okicici&pn=Holiday Water Park&am=${total.toFixed(0)}&cu=INR`;

  const increment = (setter) => setter((prev) => prev + 1);
  const decrement = (setter) => setter((prev) => (prev > 0 ? prev - 1 : 0));

  const incFamilyMember = (setter) => {
    if (currentFamilyMembers < maxFamilyMembers) {
      setter((prev) => prev + 1);
    }
  };

  const handleBook = () => {
    if (total <= 0) return alert("Select Tickets First");
    if (!name) return alert("Enter Name");
    if (phone.length !== 10) return alert("Enter Valid Phone Number");
    if (!date) return alert("Select Visit Date");

    if (ticketType === "family") {
      if (!familyValid) {
        return alert(
          `Please allocate members for your Family Pack (Max ${maxFamilyMembers} members allowed).`,
        );
      }
    }

    // 1. SAVE TO LOCALSTORAGE FOR ADMIN PANEL
    const newBooking = {
      id: Date.now(),
      name: name,
      phone: phone,
      date: date,
      type: ticketType,
      adult: adult,
      child: child,
      familyAdult: familyAdult,
      familyChild: familyChild,
      total: total,
      status: "pending", // default status
      bookingDate: new Date().toLocaleDateString("en-IN"),
    };

    const existingBookings =
      JSON.parse(localStorage.getItem("waterpark_bookings")) || [];
    localStorage.setItem(
      "waterpark_bookings",
      JSON.stringify([newBooking, ...existingBookings]),
    );

    // 2. SEND TO WHATSAPP
    let message = `🎟 Holiday Water Park Booking\n\n👤 Name : ${name}\n📞 Mobile : ${phone}\n📅 Date : ${date}\n\n`;

    if (ticketType === "individual") {
      message += `👨 Adult : ${adult}\n🧒 Child : ${child}\n`;
    } else {
      message += `👨‍👩‍👧 Family Pack : 1\n👨 Family Adults : ${familyAdult}\n🧒 Family Child : ${familyChild}\n`;
    }

    message += `\n✅ Total : ₹${total}`;

    window.open(
      `https://wa.me/918141384325?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <div className="book-page">
      <section className="book-hero">
        <h1 data-aos="zoom-in">Book Your Tickets</h1>
        <p data-aos="fade-up">Reserve Your Adventure Today</p>
      </section>

      <section className="book-container">
        <div className="book-form" data-aos="fade-right">
          <h2>Ticket Selection</h2>

          <div className="ticket-type-select">
            <select
              value={ticketType}
              onChange={(e) => {
                setTicketType(e.target.value);
                // Reset members when switching
                if (e.target.value === "family") {
                  setFamilyAdult(0);
                  setFamilyChild(0);
                }
              }}
            >
              <option value="individual">Individual Tickets</option>
              <option value="family">Family Pack</option>
            </select>
          </div>

          {ticketType === "individual" && (
            <>
              <div className="qty-box">
                <label>Adult (₹{adultPrice})</label>
                <div className="counter-wrapper">
                  <button
                    className="counter-btn"
                    onClick={() => decrement(setAdult)}
                  >
                    -
                  </button>
                  <span className="counter-value">{adult}</span>
                  <button
                    className="counter-btn"
                    onClick={() => increment(setAdult)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="qty-box">
                <label>Child (₹{childPrice})</label>
                <div className="counter-wrapper">
                  <button
                    className="counter-btn"
                    onClick={() => decrement(setChild)}
                  >
                    -
                  </button>
                  <span className="counter-value">{child}</span>
                  <button
                    className="counter-btn"
                    onClick={() => increment(setChild)}
                  >
                    +
                  </button>
                </div>
              </div>
            </>
          )}

          {ticketType === "family" && (
            <>
              <div className="qty-box">
                <label>Family Pack (₹{familyPrice})</label>
                <div className="fixed-value">
                  Family Pack Included (Upto {maxFamilyMembers} Members)
                </div>
              </div>

              <div className="qty-box">
                <label>Family Adults</label>
                <div className="counter-wrapper">
                  <button
                    className="counter-btn"
                    onClick={() => decrement(setFamilyAdult)}
                  >
                    -
                  </button>
                  <span className="counter-value">{familyAdult}</span>
                  <button
                    className="counter-btn"
                    onClick={() => incFamilyMember(setFamilyAdult)}
                    disabled={currentFamilyMembers >= maxFamilyMembers}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="qty-box">
                <label>Family Children</label>
                <div className="counter-wrapper">
                  <button
                    className="counter-btn"
                    onClick={() => decrement(setFamilyChild)}
                  >
                    -
                  </button>
                  <span className="counter-value">{familyChild}</span>
                  <button
                    className="counter-btn"
                    onClick={() => incFamilyMember(setFamilyChild)}
                    disabled={currentFamilyMembers >= maxFamilyMembers}
                  >
                    +
                  </button>
                </div>
              </div>
            </>
          )}

          <hr style={{ margin: "30px 0", border: "1px solid #eee" }} />

          <h2>Customer Details</h2>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value.replace(/[^A-Za-z\s]/g, ""))
            }
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
            }
          />
          <input
            type="date"
            min={new Date().toISOString().split("T")[0]}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="booking-cart" data-aos="fade-left">
          <h2>Booking Summary</h2>

          {ticketType === "individual" && adult > 0 && (
            <div className="cart-row">
              <span>Adult x {adult}</span>
              <span>₹{adultTotal}</span>
            </div>
          )}

          {ticketType === "individual" && child > 0 && (
            <div className="cart-row">
              <span>Child x {child}</span>
              <span>₹{childTotal}</span>
            </div>
          )}

          {ticketType === "family" && (
            <div className="cart-row">
              <span>Family Pack x 1</span>
              <span>₹{familyTotal}</span>
            </div>
          )}

          <hr />

          {ticketType === "family" && (
            <>
              <p>Total Included Members : {currentFamilyMembers}</p>
              <p>Family Adults : {familyAdult}</p>
              <p>Family Child : {familyChild}</p>
              {currentFamilyMembers === 0 && (
                <p
                  style={{
                    color: "red",
                    fontWeight: "600",
                    marginTop: "10px",
                    fontSize: "14px",
                  }}
                >
                  *Please add at least 1 member
                </p>
              )}
              <hr />
            </>
          )}

          <div className="cart-row total">
            <strong>Total</strong>
            <strong>₹{total.toLocaleString("en-IN")}</strong>
          </div>

          {total > 0 &&
            (ticketType === "individual" ||
              (ticketType === "family" && familyValid)) && (
              <div className="qr-box">
                <h3>Scan & Pay</h3>
                <QRCodeCanvas value={upiLink} size={220} />
                <p>₹{total.toLocaleString("en-IN")}</p>
                <span className="upi-id">nilsanghani43@okicici</span>
              </div>
            )}

          <button className="whatsapp-btn" onClick={handleBook}>
            Confirm Booking
          </button>
        </div>
      </section>
    </div>
  );
}

export default Book;
