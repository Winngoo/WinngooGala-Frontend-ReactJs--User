import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bg1 from "../../../assets/about/events.jpg";
import bg2 from "../../../assets/about/food.jpg";
import bg3 from "../../../assets/about/hobby.jpg";
import bg4 from "../../../assets/about/nature.jpg";

const BlogComponent = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <h2 className="text-3xl font-bold text-center">Winngoo Gala Blog</h2>
        <p className="text-center text-gray-600">
          Stay updated with the latest tips, trends, and inspirations for your
          gala celebrations.
        </p>

        {/* Blog Posts */}
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Post 1 */}
          <a
            rel="noopener noreferrer"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src={bg2}
              alt="Blog post: Unique Gala Entertainment Ideas"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                Unique Gala Entertainment Ideas
              </h3>
              <span className="text-xs dark:text-gray-600">
                January 25, 2024
              </span>
              <p>
                Explore creative entertainment options that will keep your
                guests engaged and delighted throughout the evening.
              </p>
            </div>
          </a>

          {/* Post 2 */}
          <a
            rel="noopener noreferrer"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src={bg3}
              alt="Blog post: The Perfect Venue for Your Gala"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                The Perfect Venue for Your Gala
              </h3>
              <span className="text-xs dark:text-gray-600">
                January 28, 2024
              </span>
              <p>
                Choosing the right venue is crucial. Discover factors to
                consider for a successful gala.
              </p>
            </div>
          </a>

          {/* Post 3 */}
          <a
            rel="noopener noreferrer"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src={bg4}
              alt="Blog post: Designing an Eye-Catching Invitation"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                Designing an Eye-Catching Invitation
              </h3>
              <span className="text-xs dark:text-gray-600">
                February 1, 2024
              </span>
              <p>
                Learn tips for creating invitations that not only convey your
                theme but also excite your guests.
              </p>
            </div>
          </a>

          {/* Post 4 */}
          <a
            rel="noopener noreferrer"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src={bg1}
              alt="Blog post: Gala Fashion Trends"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                Gala Fashion Trends to Watch
              </h3>
              <span className="text-xs dark:text-gray-600">
                February 5, 2024
              </span>
              <p>
                Stay ahead of the fashion curve with the latest trends for gala
                attire, ensuring you look your best.
              </p>
            </div>
          </a>

          {/* Post 5 */}
          <a
            rel="noopener noreferrer"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src={bg2}
              alt="Blog post: Gala Catering Ideas"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                Gala Catering Ideas for Every Budget
              </h3>
              <span className="text-xs dark:text-gray-600">
                February 10, 2024
              </span>
              <p>
                Discover catering options that fit various budgets while
                ensuring a delightful dining experience for your guests.
              </p>
            </div>
          </a>

          {/* Post 6 */}
          <a
            rel="noopener noreferrer"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src={bg3}
              alt="Blog post: Planning a Charity Gala"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                Planning a Charity Gala: Tips and Tricks
              </h3>
              <span className="text-xs dark:text-gray-600">
                February 15, 2024
              </span>
              <p>
                Learn how to organize a successful charity gala that not only
                raises funds but also creates a meaningful impact.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogComponent;
