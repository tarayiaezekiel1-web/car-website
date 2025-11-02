import React from "react";
import { HiShoppingBag, HiArrowPathRoundedSquare, HiOutlineCreditCard } from "react-icons/hi2";

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        
        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4 bg-gray-100">
            <HiShoppingBag className="h-6 w-6 text-gray-700" />
          </div>
          <h4 className="tracking-tighter mb-2 font-semibold">Free International Shipping</h4>
          <p className="text-gray-600 text-xs tracking-tighter font-medium">
            On all orders over $100.00
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4 bg-gray-100">
            <HiArrowPathRoundedSquare className="h-6 w-6 text-gray-700" />
          </div>
          <h4 className="tracking-tighter mb-2 font-semibold">45 Days Return</h4>
          <p className="text-gray-600 text-xs tracking-tighter font-medium">
            Your money guaranteed
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4 bg-gray-100">
            <HiOutlineCreditCard className="h-6 w-6 text-gray-700" />
          </div>
          <h4 className="tracking-tighter mb-2 font-semibold">Secure Checkout</h4>
          <p className="text-gray-600 text-xs tracking-tighter font-medium">
            100% secure checkout process
          </p>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
