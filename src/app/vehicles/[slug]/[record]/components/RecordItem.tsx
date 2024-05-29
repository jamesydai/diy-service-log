import { formatDate } from "../../utils/formatDate"

export default function RecordItem(props: any) {
    return (      
<div className="grid gap-6 rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
<div className="grid grid-cols-2 gap-4">
  <div>
    <p className="text-sm text-gray-500 dark:text-gray-400">Service Date</p>
    <p className="text-lg font-medium">{formatDate(props.service_date)}</p>
  </div>
  <div>
    <p className="text-sm text-gray-500 dark:text-gray-400">Mileage</p>
    <p className="text-lg font-medium">{props.service_mileage}</p>
  </div>
</div>
<div>
  <p className="text-sm text-gray-500 dark:text-gray-400">Service Name</p>
  <p className="text-lg font-medium">{props.service_name}</p>
</div>
<div>
  <p className="text-sm text-gray-500 dark:text-gray-400">Service Description</p>
  <p className="text-base">{props.service_desc}</p>
</div>
</div>

      
    )
  }
  

