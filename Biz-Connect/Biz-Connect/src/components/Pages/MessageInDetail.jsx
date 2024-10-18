import React from "react";
import { FaTimes } from "react-icons/fa";

const MessageInDetail = () => {
  // Sample notification data
  const mostRecentNotification = null; // Set to null for no notifications, or add a recent notification object here
  const earlierNotifications = [{}, {}, {}, {}, {}, {}];

  // Handle the delete button click
  const handleDelete = (id) => {
    console.log(`Notification with ID ${id} deleted`);
    // You can implement the deletion logic here
  };

  return (
    <div className="p-6 text-black min-h-screen">
      <h1 className="text-3xl font-semibold mb-6">Notifications</h1>

      {/* Most Recent Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Most Recent</h2>
        <div className="box-border h-[100px] w-[1300px] p-4 bg-gray-400 border-2 rounded-[16px] bg-color-black">
          {mostRecentNotification ? (
            <>
              <span>{mostRecentNotification.text}</span>
              <FaTimes
                className="cursor-pointer text-red-400"
                onClick={() => handleDelete(mostRecentNotification.id)}
              />
            </>
          ) : (
            <div className="flex justify-between items-center w-full">
              <span>No new notifications</span>
              <span role="img" aria-label="thumbs up" className="text-3xl">
                👍
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Earlier Notifications Section */}
      <h2 className="text-xl font-semibold mb-3">Earlier</h2>
      <div className="space-y-4">
        {earlierNotifications.map((notification) => (
          <div
            key={notification.id}
            className="mediumText  border-b  p-4 flex justify-between items-center"
          >
            <div>
              <p className="smallText">{notification.text}</p>
              <small className="text-gray-400 ">{notification.date}</small>
            </div>
            <FaTimes
              className="cursor-pointer text-red-600"
              onClick={() => handleDelete(notification.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageInDetail;
