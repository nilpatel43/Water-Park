import ReviewImage from "./assets/Backgrounds/Review-Image.jpg";

function Reviews() {
  const reviews = [
    {
      name: "Rahul Patel",
      review:
        "Amazing water park! The rides were thrilling and the facilities were very clean. Highly recommended for families.",
    },
    {
      name: "Priya Shah",
      review:
        "Best family destination in Gujarat. Kids enjoyed every attraction and the staff was very helpful.",
    },
    {
      name: "Amit Joshi",
      review:
        "Wave Pool and Rain Dance were fantastic. Great atmosphere and delicious food options.",
    },
    {
      name: "Neha Mehta",
      review:
        "Very well maintained park with excellent safety measures. Had a wonderful day.",
    },
    {
      name: "Karan Patel",
      review:
        "The rides were exciting and the queue management was impressive. Worth every rupee.",
    },
    {
      name: "Sneha Desai",
      review:
        "Loved the family rides and kids zone. Perfect place for a weekend outing.",
    },
    {
      name: "Jay Bhatt",
      review:
        "Fantastic experience. Clean pools, friendly staff and lots of attractions.",
    },
    {
      name: "Pooja Trivedi",
      review:
        "One of the best water parks I've visited. Great safety and entertainment.",
    },
    {
      name: "Vivek Parmar",
      review:
        "The Tornado Slide was incredible. Can't wait to visit again with friends.",
    },
    {
      name: "Riddhi Ahir",
      review:
        "Excellent service, amazing rides and a beautiful environment. Highly recommended.",
    },
  ];

  return (
    <div>
      <section
        className="reviews-hero"
        style={{ backgroundImage: `url(${ReviewImage})` }}
      >
        <div className="reviews-overlay" data-aos="zoom-in">
          <h1>Customer Reviews</h1>

          <p>
            Discover why thousands of visitors love Holiday Water Park and keep
            coming back for unforgettable memories.
          </p>
        </div>
      </section>

      <section className="reviews-section">
        <h2 data-aos="fade-up">What Our Visitors Say</h2>

        <div className="reviews-grid">
          {reviews.map((item, index) => (
            <div
              className="review-card"
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="review-stars">⭐⭐⭐⭐⭐</div>

              <p>{item.review}</p>

              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Reviews;
