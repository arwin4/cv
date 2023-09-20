/* eslint-disable react/prop-types */

export default function FormSection({ sectionTitle, children }) {
  return (
    <div className="form-section">
      <h3 className="section-title">{sectionTitle}</h3>
      {children}
    </div>
  );
}
