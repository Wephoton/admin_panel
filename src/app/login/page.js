"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    // 🧠 Dummy login (replace with your API later)
    if (email === "admin@example.com" && password === "admin123") {
      const user = {
        name: "Priya Krishnan",
        email: "admin@example.com",
        role: "Team member",
      };
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", "jwt-sample-token");
      router.push("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #e1f5fe, #07aaf5ff)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        style={{
          width: "350px",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "25px",
            color: "#0288d1",
            fontWeight: "600",
          }}
        >
          Welcome back! 👋
        </h1>

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: "15px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "6px",
                color: "#555",
                fontSize: "15px",
              }}
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "6px",
                fontSize: "15px",
                outline: "none",
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "6px",
                color: "#555",
                fontSize: "15px",
              }}
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "6px",
                fontSize: "15px",
                outline: "none",
              }}
            />
          </div>

          {error && (
            <p
              style={{
                color: "red",
                fontSize: "14px",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#0288d1",
              color: "white",
              fontSize: "16px",
              fontWeight: "500",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              transition: "background 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0c8becff")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#44afe9ff")}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
