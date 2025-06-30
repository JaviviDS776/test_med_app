import React, { useState } from 'react';
import './ReviewForm.css';

const ReviewForm = ({ doctorData, appointmentDetails }) => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewData, setReviewData] = useState({
    name: '',
    review: '',
    rating: 0
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedReview, setSubmittedReview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReviewData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingChange = (rating) => {
    setReviewData(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validar que todos los campos estén llenos
    if (!reviewData.name || !reviewData.review || reviewData.rating === 0) {
      alert('Please fill in all fields and provide a rating');
      return;
    }

    // Guardar la reseña enviada
    setSubmittedReview({
      ...reviewData,
      doctorName: doctorData?.name || 'Dr. Smith',
      appointmentDate: appointmentDetails?.date || new Date().toLocaleDateString(),
      submittedAt: new Date().toLocaleDateString()
    });
    
    setIsSubmitted(true);
    setShowReviewForm(false);
    
    console.log('Review submitted:', reviewData);
  };

  const renderStarRating = () => {
    return (
      <div className="star-rating">
        <label>Rating:</label>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${reviewData.rating >= star ? 'filled' : ''}`}
              onClick={() => handleRatingChange(star)}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="review-form-container">
      <div className="consultation-info">
        <h3>Review Your Consultation</h3>
        <div className="doctor-info">
          <p><strong>Doctor:</strong> {doctorData?.name || 'Dr. Smith'}</p>
          <p><strong>Speciality:</strong> {doctorData?.speciality || 'General Medicine'}</p>
          <p><strong>Appointment Date:</strong> {appointmentDetails?.date || 'Today'}</p>
          <p><strong>Appointment Time:</strong> {appointmentDetails?.time || '10:00 AM'}</p>
        </div>
      </div>

      <div className="feedback-section">
        <h4>Provide Feedback</h4>
        {!isSubmitted ? (
          !showReviewForm ? (
            <button 
              className="feedback-trigger-btn"
              onClick={() => setShowReviewForm(true)}
            >
              Click Here
            </button>
          ) : (
            <form onSubmit={handleSubmit} className="review-form">
              <div className="form-group">
                <label htmlFor="name">Your Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={reviewData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="review">Your Review:</label>
                <textarea
                  id="review"
                  name="review"
                  value={reviewData.review}
                  onChange={handleInputChange}
                  placeholder="Write your feedback here..."
                  rows="4"
                  required
                />
              </div>

              {renderStarRating()}

              <div className="form-actions">
                <button type="submit" className="submit-btn">
                  Submit Review
                </button>
                <button 
                  type="button" 
                  className="cancel-btn"
                  onClick={() => setShowReviewForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          )
        ) : (
          <div className="feedback-disabled">
            <button className="feedback-trigger-btn disabled" disabled>
              Feedback Already Submitted
            </button>
          </div>
        )}
      </div>

      {/* Mostrar la reseña enviada */}
      {submittedReview && (
        <div className="submitted-review">
          <h4>Your Submitted Review</h4>
          <div className="review-display">
            <p><strong>Name:</strong> {submittedReview.name}</p>
            <p><strong>Rating:</strong> 
              <span className="rating-display">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className={`star ${submittedReview.rating >= star ? 'filled' : ''}`}>
                    ★
                  </span>
                ))}
              </span>
            </p>
            <p><strong>Review:</strong> {submittedReview.review}</p>
            <p><strong>Submitted on:</strong> {submittedReview.submittedAt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewForm;