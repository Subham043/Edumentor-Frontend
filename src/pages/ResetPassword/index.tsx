import { page_routes } from "@/lib/page_routes"
import { Link } from "react-router-dom"


const ResetPassword = () => {
  return (
    <div className="max-w-md w-full p-6">
      <h1 className="text-3xl font-semibold mb-6 text-black text-center">Reset Password</h1>
      <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">Enter the following details to reset your password</h1>
      <form action="#" method="POST" className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="text" id="email" name="email" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
        </div>
        <div>
          <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input type="password" id="confirm_password" name="confirm_password" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
        </div>
        <div>
          <button type="submit" className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">Reset Password</button>
        </div>
      </form>
      <div className="mt-4 text-sm text-gray-600 text-center">
        <p>Remember your password? <Link to={page_routes.login} className="text-black hover:underline">Login here</Link>
        </p>
      </div>
    </div>
  )
}

export default ResetPassword