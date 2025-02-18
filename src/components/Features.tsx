import React from "react";
import { BiBarChart, BiCalendar, BiCreditCard, BiMessageSquare } from "react-icons/bi";
import { CgLock } from "react-icons/cg";
import { FaUserSecret } from "react-icons/fa";
 export const Features = () => {
  const features = [{
    icon: <FaUserSecret className="w-6 h-6 text-blue-600" />,
    title: "Member Management",
    description: "Easily manage memberships, track attendance, and handle renewals."
  }, {
    icon: <BiCalendar className="w-6 h-6 text-blue-600" />,
    title: "Class Scheduling",
    description: "Create and manage class schedules, handle bookings and waitlists."
  }, {
    icon: <BiBarChart className="w-6 h-6 text-blue-600" />,
    title: "Performance Analytics",
    description: "Track revenue, attendance, and member engagement with detailed reports."
  }, {
    icon: <CgLock className="w-6 h-6 text-blue-600" />,
    title: "Attendance Tracking",
    description: "Monitor member check-ins and class attendance in real-time."
  }, {
    icon: <BiCreditCard className="w-6 h-6 text-blue-600" />,
    title: "Payment Processing",
    description: "Handle payments, subscriptions, and automated billing seamlessly."
  }, {
    icon: <BiMessageSquare className="w-6 h-6 text-blue-600" />,
    title: "Member Communication",
    description: "Send announcements, updates, and automated notifications."
  }];
  return <section id="features" className="w-full   py-40">
      <div className=" app-layout px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className=" font-bold text-light mb-4">
            Everything You Need to <span className="text-highlight"> Run Your Gym</span>
          </h2>
          <p className=" text-secondary ">
            Powerful features designed specifically for gym management
          </p>
        </div>
        <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <div key={index} className="p-6 border border-gray-700 rounded-lg   shadow-md hover:shadow-lg transition-shadow backdrop-blur-xl">
              <div className="mb-4">{feature.icon}</div>
              <h4 className=" font-semibold text-light mb-2">
                {feature.title}
              </h4>
              <p className="text-secondary">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};