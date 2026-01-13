import { Badge } from "@repo/design-system/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@repo/design-system/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/design-system/components/ui/table";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cost Guard",
  description: "Monitor and control your AI/RPC usage.",
};

export default function CostGuardPage() {
  return (
    <div className="flex flex-1 flex-col gap-6 p-6">
      {/* Page Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Cost Guard</h1>
        <p className="text-muted-foreground">Monitor and control your AI/RPC usage.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Cost (This Month)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold tracking-tight">$1,234.56</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Budget Limit
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold tracking-tight">$2,000.00</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Remaining Budget
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold tracking-tight text-green-600">$765.44</p>
          </CardContent>
        </Card>
      </div>

      {/* Status Section */}
      <Card>
        <CardContent className="flex items-center gap-3 py-4">
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">PASS</Badge>
          <p className="text-sm text-muted-foreground">All systems operational. Budget within limits.</p>
        </CardContent>
      </Card>

      {/* Events Table */}
      <Card>
        <CardHeader>
          <CardTitle>Cost Events</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Time</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>2026-01-13 10:00:00</TableCell>
                <TableCell>OpenAI API</TableCell>
                <TableCell>$0.04</TableCell>
                <TableCell>
                  <Badge variant="secondary">PASS</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2026-01-13 10:05:23</TableCell>
                <TableCell>Anthropic API</TableCell>
                <TableCell>$1.20</TableCell>
                <TableCell>
                  <Badge variant="outline">WARN</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2026-01-13 10:11:45</TableCell>
                <TableCell>Internal RPC</TableCell>
                <TableCell>$0.0001</TableCell>
                <TableCell>
                  <Badge variant="secondary">PASS</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2026-01-13 10:45:00</TableCell>
                <TableCell>Fine-tuning Run</TableCell>
                <TableCell>$15.50</TableCell>
                <TableCell>
                  <Badge variant="destructive">FAIL</Badge>
                </TableCell>
              </TableRow>
               <TableRow>
                <TableCell>2026-01-13 11:00:00</TableCell>
                <TableCell>Vector DB Write</TableCell>
                <TableCell>$0.05</TableCell>
                <TableCell>
                  <Badge variant="secondary">PASS</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
