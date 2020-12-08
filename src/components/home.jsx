import React from "react";
import _ from "lodash";
import { Link, useParams } from "react-router-dom";

const Home = ({ store, handleSignout, orders }) => {
  // const handleSignout =()=>{
  //     localStorage.removeItem('login');
  // }
    
    console.log("this is order->:", orders.data);

  return (
    <div>
      {store.login ? (
        <div>
          you are signed in as {store.user.name}
          <button onClick={() => handleSignout()}>Logout</button>
          <br />
          <div>
            <div class="bg-gray-800">
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16">
                  <div class="flex items-center">
                    <div class="flex-shrink-0">
                      <img
                        class="h-8 w-8"
                        src="https://tailwindui.com/img/logos/v1/workflow-mark-on-dark.svg"
                        alt="Workflow logo"
                      />
                    </div>
                    <div class="hidden md:block">
                      <div class="ml-10 flex items-baseline space-x-4">
                        <a
                          href="/"
                          class="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
                        >
                          Orders
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="hidden md:block">
                    <div class="ml-4 flex items-center md:ml-6">
                      <button
                        class="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
                        aria-label="Notifications"
                      >
                        <svg
                          class="h-6 w-6"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                          />
                        </svg>
                      </button>

                      <div class="ml-3 relative">
                        <div>
                          <button
                            class="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid"
                            id="user-menu"
                            aria-label="User menu"
                            aria-haspopup="true"
                          >
                            <img
                              class="h-8 w-8 rounded-full"
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                            />
                          </button>
                        </div>

                        <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                          <div
                            class="py-1 rounded-md bg-white shadow-xs"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="user-menu"
                          >
                            <a
                              href="/"
                              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              role="menuitem"
                            >
                              Your Profile
                            </a>

                            <a
                              href="/"
                              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              role="menuitem"
                            >
                              Settings
                            </a>

                            <a
                              href="/"
                              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              role="menuitem"
                            >
                              Sign out
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="-mr-2 flex md:hidden">
                    <button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
                      <svg
                        class="block h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                      <svg
                        class="hidden h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div class="hidden md:hidden">
                <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <a
                    href="/"
                    class="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
                  >
                    Orders
                  </a>
                </div>
                <div class="pt-4 pb-3 border-t border-gray-700">
                  <div class="flex items-center px-5 space-x-3">
                    <div class="flex-shrink-0">
                      <img
                        class="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="mt-3 px-2 space-y-1">
                    <a
                      href="/"
                      class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                    >
                      Your Profile
                    </a>

                    <a
                      href="/"
                      class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                    >
                      Settings
                    </a>

                    <a
                      href="/"
                      class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <header class="bg-white shadow">
              <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold leading-tight text-gray-900">
                  Orders
                </h1>
              </div>
            </header>
            <main>
              <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div class="flex flex-col">
                  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                          <thead>
                            <tr>
                              <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                OrderID
                              </th>
                              <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Customer Name
                              </th>
                              <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Status
                              </th>
                              <th class="px-6 py-3 bg-gray-50"></th>
                            </tr>
                          </thead>
                          <tbody class="bg-white divide-y divide-gray-200">
                            {orders.data.map((order, index) => {
                              return (
                                <tr id={order.id}>
                                  <td class="px-6 py-4 whitespace-no-wrap">
                                    <div class="flex items-center">
                                      <div class="ml-4">
                                        <div class="text-sm leading-5 font-medium text-gray-900">
                                          {order.id}
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td class="px-6 py-4 whitespace-no-wrap">
                                    <div class="text-sm leading-5 text-gray-900">
                                      {order.user.name}
                                    </div>
                                  </td>
                                  <td class="px-6 py-4 whitespace-no-wrap">
                                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                      {order.status}
                                    </span>
                                  </td>

                                  <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                                    <Link
                                      to={`order/${order.id}`}
                                      className="text-indigo-600 hover:text-indigo-900"
                                    >
                                      Edit
                                    </Link>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                        {/* pagination */}
                        <nav aria-label="Page navigation example">
                          <ul class="pagination">
                            {/* {_.range(orders.meta.last_page).map(
                              (value, page) => {
                                return (
                                  <li class="page-item">
                                    <a class="page-link" href="/">
                                      {page+1}
                                    </a>
                                  </li>
                                );
                              }
                            )} */}
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      ) : (
        <div>please sign in</div>
      )}
    </div>
  );
};



export default Home;
