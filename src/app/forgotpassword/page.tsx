export default function ForgotPassword() {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <div className="text-center mb-8">
          <div className="flex justify-center">
            <i
              data-feather="shopping-bag"
              className="text-indigo-600 h-8 w-8"
            ></i>
          </div>
          <h1 className="mt-4 text-2xl font-bold text-gray-900">
            Đặt lại mật khẩu
          </h1>
          <p className="mt-2 text-gray-600">
            Nhập tài khoản email của bạn để đặt lại mật khẩu
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i data-feather="mail" className="h-5 w-5 text-gray-400"></i>
              </div>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="py-2 pl-10 block w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Đặt lại mật khẩu
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Nhớ mật khẩu của bạn?
            <a
              href="/login"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Đăng nhập
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
