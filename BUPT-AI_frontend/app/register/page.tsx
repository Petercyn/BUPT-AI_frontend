import Image from "next/image";

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-5xl font-bold">Your Heading Here</h1>
      <Image 
        src="https://example.com/owl-graduation-cap.png" 
        alt="Owl with Graduation Cap" 
        width={200} 
        height={200}
        className="mb-8"
      />
      <p className="text-lg">Description text goes here.</p>
      <form className="mt-12 flex flex-col gap-4">
        {/* Your form elements here */}
        <input 
          type="text" 
          placeholder="Username" 
          className="border p-2 rounded" 
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="border p-2 rounded" 
        />
        <button 
          type="submit" 
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  );
}
