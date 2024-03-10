import Link from "next/link";

export default function NotFound() {
  return (
    <div class="text-center flex justify-center flex-col gap-5 items-center bg-black min-h-screen">
      <h1 class="mb-4 text-9xl font-semibold text-red-500">404</h1>
      <p class="mb-4  text-gray-600 text-3xl">
        Oops! sorry this page {"doesn't"} exist.
      </p>
      <div class="animate-bounce">
        <svg
          class="mx-auto h-16 w-16 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          ></path>
        </svg>
      </div>
      <p class="mt-4 text-gray-600">
        Coming soon. {" Let's"} get you back{" "}
        <Link href="/" class="text-blue-500">
          home
        </Link>
        .
      </p>
    </div>
  );
}
