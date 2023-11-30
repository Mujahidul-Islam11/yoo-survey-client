
import { NavLink } from 'react-router-dom';

const PricingCard = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Pro User Membership</div>
        <p className="text-gray-700 text-base">Unlock premium features and insights with our Pro User membership.</p>

        <div className="mt-4">
          <ul className="list-disc list-inside">
            <li>Access to advanced analytics</li>
            <li>Participate in exclusive surveys</li>
            <li>Comment on surveys</li>
          </ul>
        </div>

        <div className="mt-4 font-bold text-xl">$9.99/month</div>
      </div>

      <div className="px-6 py-4">
        <NavLink to="/payment" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Pay Now
        </NavLink>
      </div>
    </div>
  );
};

export default PricingCard;