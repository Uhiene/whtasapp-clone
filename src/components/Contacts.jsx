import React, { useState } from "react";

function Contacts() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const contactsList = [
      {
        id: 1,
        image:
          "https://pbs.twimg.com/profile_images/1529866054746398724/6_yk41Lt_400x400.jpg",
        userName: "Darlington Gospel",
        post: "Lorem ipsum dolor consectetur.",
        time: "4am",
      },
      {
        id: 2,
        image:
          "https://pbs.twimg.com/profile_images/1584936060353929216/gbHFqT11_400x400.jpg",
        userName: "Saran Pariyar",
        post: "Lorem ipsum dolor consectetur.",
        time: "7am",
      },
      {
        id: 3,
        image:
          "https://pbs.twimg.com/profile_images/1553402925929603072/qPN5j2_Y_400x400.jpg",
        userName: "Prince Eldn",
        post: "Lorem ipsum dolor consectetur.",
        time: "2am",
        likes: 4,
      },
  ];
  return (
    <>
      {contactsList.map((contact) => (
        <div
          key={contact.id}
          onClick={() => handleItemClick(contact.id)}
          style={{
            backgroundColor: selectedItem === contact.id ? "lightgray" : "white",
          }}
          className="flex justify-between p-2 px-4 bg-white cursor-pointer"
        >
          <img
            src={contact.image}
            alt=""
            className="rounded-full w-12 h-12"
          />
          <div className="w-3/5 text-start">
            <h1>{contact.userName}</h1>
            <p className="text-sm">{contact.post}</p>
          </div>
          <div>
            <h1 className="text-sm">{contact.time}</h1>
            <p>l</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Contacts;
