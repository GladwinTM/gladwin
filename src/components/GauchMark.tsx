import Link from "next/link";

export function GauchMark() {
  return (
    <Link href="/" className="gauch-mark" aria-label="Gauch Labs home">
      <img
        src="https://ovpyekpwmbvuxzspjauz.supabase.co/storage/v1/object/sign/my_images/pasted-image.png?token=eyJraWQiOiI5ZTlmNDJlMC05ZjAxLTRiMjgtOGEyNC02OTcxNGUwODcyZjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJteV9pbWFnZXMvcGFzdGVkLWltYWdlLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODgwNzcxNTksImV4cCI6MTgxOTYxMzE1OX0.mBoiz3hk3NNIlJ2fE6FVhQuLeRgOiWAyqs-bv658wkE"
        alt="Gauch Labs"
        className="gauch-mark-image"
      />
    </Link>
  );
}