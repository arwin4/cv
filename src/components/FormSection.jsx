/* eslint-disable react/prop-types */

export default function FormSection({ sectionTitle, children }) {
  return (
    <div className="form_section">
      <h1>{sectionTitle}</h1>
      {children}
    </div>
  );
}
