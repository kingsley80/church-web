import ji from "../assets/ji.png";

const NotFoundPage = () => {
  return (
    // <section className="text-center flex flex-col justify-center items-center h-96">
    //   <FaExclamationTriangle className="text-yellow-400 text-6xl mb-4" />
    //   <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
    //     404
    //   </h1>
    //   <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
    //     Something's missing.
    //   </p>
    //   <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
    //     Sorry, we can't find that page. You'll find lots to explore on the home
    //     page.{" "}
    //   </p>
    //   <Link
    //     to="/"
    //     className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-5"
    //   >
    //     Back to Homepage
    //   </Link>
    // </section>

    // <section className="bg-white dark:bg-gray-900">
    //   <div className="py-8 px-4 mx-auto max-w-screen-2xl lg:py-52 lg:px-6">
    //     <div className="mx-auto max-w-screen-sm text-center">
    //       <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
    //         404
    //       </h1>
    //       <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
    //         Something's missing.
    //       </p>
    //       <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
    //         Sorry, we can't find that page. You'll find lots to explore on the
    //         home page.{" "}
    //       </p>
    //       <Link
    //         to="/"
    //         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-5"
    //       >
    //         Back to Homepage
    //       </Link>
    //     </div>
    //   </div>
    // </section>

    <section
      className="min-h-screen bg-cover bg-no-repeat bg-fixed bg-center"
      style={{
        backgroundImage: `url(${ji})`,
      }}
    ></section>
  );
};

export default NotFoundPage;
