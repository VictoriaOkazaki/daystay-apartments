"use client";
export default function Login() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    console.log("Submitted Data:", Object.fromEntries(formData.entries()));

    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login: formData.get("login"),
        password: formData.get("password"),
      }),
    });
    const result = await response.json();

    console.log(result);

    localStorage.setItem("accessToken", result.accessToken);

    const response1 = await fetch("/api/flat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({
        name: "Flat 1",
        roomsCount: 3,
      }),
    });

    const result1 = await response1.json();

    console.log(result1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="login" placeholder="Логин" required />
      <input type="password" name="password" placeholder="Пароль" required />
      <button type="submit">Send</button>
    </form>
  );
}
