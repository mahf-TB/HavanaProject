import React, { useState, useEffect } from "react";

export default function LiveDateTime() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Met à jour chaque seconde

    // Nettoyage de l'intervalle lors de la destruction du composant
    return () => clearInterval(intervalId);
  }, []);

  // Formater la date et l'heure
  const formattedDate = dateTime.toLocaleDateString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const formattedTime = dateTime.toLocaleTimeString("fr-FR");

  return (
    <div className="text-xs ">
      <p className="text-slate-900">{formattedDate}</p>
      <p className="text-slate-900">{formattedTime}</p>
    </div>
  );
}
