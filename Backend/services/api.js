const API_BASE = process.env.REACT_APP_API_BASE;

export async function uploadResume(formData) {
  try {
    const response = await fetch(`${API_BASE}/api/upload`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to upload resume");
    }

    return await response.json();
  } catch (err) {
    console.error("Error uploading resume:", err);
    throw err;
  }
}
