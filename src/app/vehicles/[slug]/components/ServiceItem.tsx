
import { Button } from '@/components/ui/button'
import { formatDate } from '../utils/formatDate'
import Link from 'next/link';

import {TableRow,TableCell} from "@/components/ui/table"

export default function ServiceItem(props: any) {
    return (      
        <TableRow>
        <TableCell>{formatDate(props.service_date)}</TableCell>
        <TableCell>{props.service_mileage}</TableCell>
        <TableCell>{props.service_name}</TableCell>
        <TableCell>

        <Link href={props.vehicleLink}>
          <Button size="sm" variant="outline">
            View record
          </Button>
        </Link>
        </TableCell>
      </TableRow>
    )
  }
  