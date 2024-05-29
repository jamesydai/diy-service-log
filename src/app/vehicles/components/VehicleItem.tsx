
import { Button } from '@/components/ui/button'
import Link from 'next/link'

import { Card, CardContent } from '@/components/ui/card'

export default function VehicleItem(props: any) {
    return (      
      <Card className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
        <CardContent className="p-6">
          <div className="flex flex-col items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold">{`${props.year} ${props.make} ${props.model}`}</h3>
              <p className="text-gray-500">{props.trim}</p>
            </div>
            <Link href={props.vehicleLink}>
            <Button size="sm" variant="outline">
              View Details
            </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    )
  }
  