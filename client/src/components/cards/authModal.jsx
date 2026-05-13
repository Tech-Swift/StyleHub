import AuthCard from "./AuthCard";

export default function AuthModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0
        z-50
        flex items-center justify-center
        bg-black/60
        backdrop-blur-sm
      "
      onClick={onClose}
    >
      {/* Prevent closing when clicking inside card */}
      <div onClick={(e) => e.stopPropagation()}>
        <AuthCard onSuccess={onClose} />
      </div>
    </div>
  );
}