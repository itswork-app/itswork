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
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="flex flex-col space-y-2 pb-4">
        <h1 className="text-3xl font-bold tracking-tight">Cost Guard</h1>
        <p className="text-muted-foreground">Monitor and control your AI/RPC usage.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Cost (This Month)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,234.56</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Budget Limit
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,000.00</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Remaining Budget
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">$765.44</div>
          </CardContent>
        </Card>
      </div>

      <Card className="col-span-3">
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
