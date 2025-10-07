"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [showBox, setShowBox] = useState(false);
  const router = useRouter();

  // ✅ Check if user is logged in
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      router.push("/login");
    } else {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, [router]);

  // ✅ Logout and clear data
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    router.push("/login");
  };

  if (!user)
    return (
      <p style={{ textAlign: "center", marginTop: "50px", fontSize: "18px" }}>
        Loading dashboard...
      </p>
    );

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        background: "linear-gradient(135deg, #b3e5fc, #81d4fa)",
        fontFamily: "Segoe UI, sans-serif",
        position: "relative",
      }}
    >
      {/* 👤 Profile icon (clickable) */}
      <div
        onClick={() => setShowBox(!showBox)}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          cursor: "pointer",
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Profile"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            border: "2px solid #0288d1",
            backgroundColor: "#e1f5fe",
          }}
        />
      </div>

      {/* 📦 Profile details box */}
      {showBox && (
        <div
          style={{
            position: "absolute",
            top: "80px",
            left: "20px",
            width: "230px",
            background: "rgba(255, 255, 255, 0.95)",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            padding: "15px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <h3 style={{ margin: 0, color: "#01579b" }}>{user.name}</h3>
          <p style={{ margin: 0, color: "#333" }}>{user.email}</p>
          <p style={{ margin: 0 }}>
            <b>Role:</b> {user.role}
          </p>
          <button
            onClick={handleLogout}
            style={{
              marginTop: "10px",
              padding: "8px",
              backgroundColor: "#0288d1",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "500",
            }}
          >
            Logout
          </button>
        </div>
      )}

      {/* 📊 Main dashboard content */}
      <div
        style={{
          marginTop: "150px",
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {/* Analytics card */}
        <div
          style={{
            width: "400px",
            minHeight: "220px",
            background: "rgba(255, 255, 255, 0.85)",
            borderRadius: "12px",
            boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
            padding: "20px",
          }}
        >
          <h2 style={{ color: "#01579b" }}>📈 Analytics</h2>
          <div
            style={{
              height: "150px",
              background: "#e1f5fe",
              borderRadius: "8px",
              marginTop: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#555",
              fontWeight: "500",
            }}
          >
            Graph Placeholder
          </div>
        </div>

        {/* Tasks card */}
        <div
          style={{
            width: "400px",
            minHeight: "220px",
            background: "rgba(255, 255, 255, 0.85)",
            borderRadius: "12px",
            boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
            padding: "20px",
          }}
        >
          <h2 style={{ color: "#01579b" }}>📝 Tasks</h2>
          <ul style={{ lineHeight: "1.8", color: "#333" }}>
            <li>Finish report update</li>
            <li>Review project status</li>
            <li>Prepare weekly meeting notes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
