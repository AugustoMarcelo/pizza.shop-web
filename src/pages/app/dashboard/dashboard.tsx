import { Helmet } from 'react-helmet-async'

import { DayOrdersAmountCard } from '@/pages/app/dashboard/day-orders-amount-card'
import { MonthCanceledOrdersAmountCard } from '@/pages/app/dashboard/month-canceled-orders-amount'
import { MonthOrdersAmountCard } from '@/pages/app/dashboard/month-orders-amount-card'
import { MonthRevenueCard } from '@/pages/app/dashboard/month-revenue-card'
import { PopularProductsChart } from '@/pages/app/dashboard/popular-products-chart'
import { RevenueChart } from '@/pages/app/dashboard/revenue-chart'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmountCard />
        </div>

        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-9">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}
