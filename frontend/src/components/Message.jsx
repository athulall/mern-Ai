const Message = ({ role, text }) => {

  return (
    <div
      style={{
        display: "flex",
        justifyContent: role === "user" ? "flex-end" : "flex-start",
        marginBottom: "10px"
      }}
    >
      <div
        style={{
          maxWidth: "70%",
          padding: "10px 14px",
          borderRadius: "12px",
          background: role === "user" ? "#4f46e5" : "#e5e7eb",
          color: role === "user" ? "white" : "black"
        }}
      >
        {text}
      </div>
    </div>
  );

};

export default Message;