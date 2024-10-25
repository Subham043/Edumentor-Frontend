import Spinner from "../Spinner"


const PageLoader = () => {
 return (
  <div className="flex justify-center items-center h-dvh">
   <div className="no-file-found flex flex-col items-center justify-center py-8 px-4 text-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
    <Spinner className="fill-gray-700" />
    <p className="text-gray-500 dark:text-gray-400 mt-2">
     Please wait while we are setting up everything.
    </p>
   </div>
  </div>
 )
}

export default PageLoader