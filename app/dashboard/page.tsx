// app/input-form/page.tsx
import { db } from "@/lib/firebase"; // Ensure Firebase is initialized properly
import { collection, addDoc } from "firebase/firestore";

export default function InputFormPage() {
  // Server Action to handle form submission
  async function handleFormSubmit(formData: FormData): Promise<void> {
    "use server"; // Required for server actions

    const name = formData.get("name") as string | null;
    const email = formData.get("email") as string | null;
    const message = formData.get("message") as string | null;

    if (!name || !email || !message) {
      console.error("All fields are required.");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "users"), {
        name,
        email,
        message,
        createdAt: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <form
      action={handleFormSubmit}
      method="POST"
      className="p-4 max-w-md mx-auto"
    >
      <h1 className="text-xl font-bold mb-4">Submit Your Info</h1>

      <label htmlFor="name" className="block mb-2">
        Name:
      </label>
      <input
        type="text"
        name="name"
        id="name"
        required
        className="block w-full border p-2 mb-4"
      />

      <label htmlFor="email" className="block mb-2">
        Email:
      </label>
      <input
        type="email"
        name="email"
        id="email"
        required
        className="block w-full border p-2 mb-4"
      />

      <label htmlFor="message" className="block mb-2">
        Message:
      </label>
      <textarea
        name="message"
        id="message"
        required
        className="block w-full border p-2 mb-4"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}