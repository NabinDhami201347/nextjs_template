import { formatDate } from "../../helpers/date"

const Footer = () => {
  const today = formatDate(new Date())
  return (
    <footer className="w-full h-10 flex items-center justify-center py-2 border-t bg-background">
      <div className="w-11/12 mx-auto">
        <p className="text-center text-sm dark:text-gray-400 text-gray-500">
          &copy; Nabin Dhami{" "}
          <span className="text-lg dark:text-gray-100 text-gray-600">.</span>{" "}
          {today}
        </p>
      </div>
    </footer>
  )
}

export default Footer
