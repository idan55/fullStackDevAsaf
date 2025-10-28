import React from "react";

const Q18 = () => {
  const users = [
    { username: "idan55", isOnline: true },
    { username: "noaC", isOnline: false },
    { username: "danielDev", isOnline: true },
    { username: "mayaR", isOnline: false },
    { username: "lior123", isOnline: true },
    { username: "edenb", isOnline: false },
    { username: "omerZ", isOnline: true },
    { username: "yaelm", isOnline: false },
    { username: "amitp", isOnline: true },
    { username: "nadavB", isOnline: false },
  ];

  return (
    <div>
      {users
        .filter((item) => item.isOnline)
        .map((item, index) => (
          <li key={index}>{item.username}</li>
        ))}
    </div>
  );
};

export default Q18;
