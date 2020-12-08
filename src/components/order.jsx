import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import Axios from "axios";

const initialState = {
  "id": 1,
  "uuid": "3067cfcc-a653-4a75-a2c3-a29cef0a0287",
  "status": "NEW",
  "payment_status": "PENDING",
  "payment_method": "COD",
  "total_amount": 840000,
  "shipping_amount": 40000,
  "user_id": 21,
  "address_id": 1,
  "shipping_service_id": 1,
  "created_at": "2020-11-17T00:00:00.000000Z",
  "updated_at": "2020-11-17T00:00:00.000000Z",
  "user": {
      "id": 21,
      "name": "Mrs. Jackie Abbott Jr.",
      "email": "bridget77@example.net",
      "email_verified_at": "2020-11-17T20:32:19.000000Z",
      "phone_number": "1490212000",
      "created_at": "2020-11-17T20:32:19.000000Z",
      "updated_at": "2020-11-17T20:32:19.000000Z"
  },
  "address": {
      "id": 1,
      "name": "Vernie Hansen",
      "address_1": "NO.76, INDUSTRIAL ESTATE",
      "address_2": "HOMAGAMA",
      "city": "HOMAGAMA",
      "postal_code": "10200",
      "country": "Sri Lanka",
      "user_id": 21,
      "created_at": "2020-11-17T00:00:00.000000Z",
      "updated_at": "2020-11-17T00:00:00.000000Z"
  },
  "shipping_service": {
      "id": 1,
      "name": "GRASSHOPPERS",
      "slug": "grasshoppers",
      "delivery_api_key": "ZLVQ46D7KNPERGW",
      "delivery_post_url": "https://www.grasshoppers.lk/customers/WebService/createDeliveryRequest",
      "pickup_id": null,
      "created_at": null,
      "updated_at": null
  },
  "order_product": [
      {
          "id": 1,
          "order_id": 1,
          "product_id": 6,
          "created_at": null,
          "updated_at": null,
          "product": {
              "id": 6,
              "name": "CadetBlue",
              "price": 400000,
              "description": "Voluptate voluptates odio iste dolorem.",
              "created_at": "2020-11-17T00:00:00.000000Z",
              "updated_at": "2020-11-17T00:00:00.000000Z"
          }
      },
      {
          "id": 2,
          "order_id": 1,
          "product_id": 7,
          "created_at": null,
          "updated_at": null,
          "product": {
              "id": 7,
              "name": "Olive",
              "price": 400000,
              "description": "Est quia et aut voluptatum officia eum.",
              "created_at": "2020-11-17T00:00:00.000000Z",
              "updated_at": "2020-11-17T00:00:00.000000Z"
          }
      }
  ]

};

const Order = () => {
  const [order, setorder] = useState(initialState);
  const id = useParams();

  useEffect(() => {
    Axios.get(`http://127.0.0.1:8000/api/order/1`)
      .then((res) => {
        console.log(res.data.data);
        setorder(res.data.data);
      })
      .catch((err) => console.log("error", err));
  }, []);
  // console.log('oofrt',order);
  return (
    <div>
      <div>
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link to="/home">Home</Link>
                  <img
                    className="h-8 w-8"
                    src="https://tailwindui.com/img/logos/v1/workflow-mark-on-dark.svg"
                    alt="Workflow logo"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <a
                      href="/"
                      className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
                    >
                      Orders
                    </a>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
                    aria-label="Notifications"
                  >
                    <svg
                      className="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </button>

                  <div className="ml-3 relative">
                    <div>
                      <button
                        className="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid"
                        id="user-menu"
                        aria-label="User menu"
                        aria-haspopup="true"
                      >
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </button>
                    </div>

                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                      <div
                        className="py-1 rounded-md bg-white shadow-xs"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu"
                      >
                        <a
                          href="/"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          Your Profile
                        </a>

                        <a
                          href="/"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          Settings
                        </a>

                        <a
                          href="/"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          Sign out
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
                  <svg
                    className="block h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <svg
                    className="hidden h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="hidden md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
              >
                Orders
              </a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5 space-x-3">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-3 px-2 space-y-1">
                <a
                  href="/"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  Your Profile
                </a>

                <a
                  href="/"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  Settings
                </a>

                <a
                  href="/"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </nav>

        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              Orders
            </h1>
          </div>
        </header>
        {/* <main> */}
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Order Information
              </h3>
              <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                Order Information
              </p>
            </div>
            <div>
              <dl>
                <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm leading-5 font-medium text-gray-500">
                    Order ID
                  </dt>
                  <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                    {id.id}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm leading-5 font-medium text-gray-500">
                    Customer
                  </dt>
                  <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                    {order.user.name}
                  </dd>
                </div>

                <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm leading-5 font-medium text-gray-500">
                    Address
                  </dt>
                  <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                    {order.address.address_1}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm leading-5 font-medium text-gray-500">
                    Phone Number
                  </dt>
                  <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                    {order.user.phone_number}
                  </dd>
                </div>

                <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm leading-5 font-medium text-gray-500">
                    Delivery Serivice
                  </dt>
                  <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                    {order.shipping_service.name}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <hr className="border border-solid  border-b-1 border-gray-300  mt-6" />
          <div className="flex flex-col mt-6">
            <div className="px-4 py-5 border-b border-gray-200 sm:px-6 bg-white">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Products
              </h3>
            </div>
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Product Name
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {order.order_product.map((product) => {
                        return (
                          <tr>
                            <td className="px-6 py-4 whitespace-no-wrap">
                              <div className="text-sm leading-5 text-gray-900">
                                {product.product.name}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap">
                              <div className="text-sm leading-5 text-gray-900">
                              {product.product.price}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="hidden sm:block">
              <div className="py-5">
                <div className="border-t border-gray-200"></div>
              </div>
            </div>

            <div className="mt-10 sm:mt-0">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Full Fill Order
                    </h3>
                    <p className="mt-1 text-sm leading-5 text-gray-600">
                      Use a your pickup address
                    </p>
                  </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <form action="#" method="POST">
                    <div className="shadow overflow-hidden sm:rounded-md">
                      <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="country"
                              className="block text-sm font-medium leading-5 text-gray-700"
                            >
                              Select Pickup Address{" "}
                            </label>
                            <select
                              id="country"
                              className="mt-1 block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                            >
                              <option>United States</option>
                              <option>Canada</option>
                              <option>Mexico</option>
                            </select>
                          </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                          <button className="py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-indigo-600 transition duration-150 ease-in-out">
                            Send Delivery Request
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* </main> */}
        </div>
      </div>
    </div>
  );
};

export default Order;
