"use client"

import * as React from "react"

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  Box,
  Button,
  Checkbox,
  Flex,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuGroup,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
} from "@chakra-ui/react"
import { BiDotsHorizontal, BiDownArrow } from "react-icons/bi"
import { BsCaretDown } from "react-icons/bs"

const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },
]

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        isChecked={table.getIsAllPageRowsSelected()}
        isIndeterminate={table.getIsSomePageRowsSelected()}
        onChange={(e) => table.toggleAllPageRowsSelected(e.target.checked)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        isChecked={row.getIsSelected()}
        onChange={(e) => row.toggleSelected(e.target.checked)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Text textTransform="capitalize">{row.getValue("status")}</Text>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          rightIcon={<BiDownArrow />}
        >
          Email
        </Button>
      )
    },
    cell: ({ row }) => <Text textTransform="lowercase">{row.getValue("email")}</Text>,
  },
  {
    accessorKey: "amount",
    header: () => <Text textAlign="right">Amount</Text>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return <Text textAlign="right" fontWeight="medium">{formatted}</Text>
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original

      return (
        <Menu>
          <MenuButton as={IconButton} icon={<BiDotsHorizontal />} variant="ghost" aria-label="Options">
            <span className="sr-only">Open menu</span>
          </MenuButton>
          <MenuList>
            <MenuGroup title="Actions">
              <MenuItem onClick={() => navigator.clipboard.writeText(payment.id)}>
                Copy payment ID
              </MenuItem>
              <MenuItem>View customer</MenuItem>
              <MenuItem>View payment details</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      )
    },
  },
]

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <Box width="full">
      <Flex alignItems="center" py={4}>
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          maxWidth="sm"
        />
        <Menu>
          <MenuButton as={Button} variant="outline" marginLeft="auto" rightIcon={<BsCaretDown />}>
            Columns
          </MenuButton>
          <MenuList>
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <MenuItem
                  key={column.id}
                  closeOnSelect={false}
                  icon={
                    <Checkbox
                      isChecked={column.getIsVisible()}
                      onChange={(e) => column.toggleVisibility(e.target.checked)}
                    />
                  }
                >
                  {column.id}
                </MenuItem>
              ))}
          </MenuList>
        </Menu>
      </Flex>
      <Box border="1px" borderColor="gray.200" borderRadius="md">
        <Table>
          <Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <Th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <Tr key={row.id} bg={row.getIsSelected() ? "blue.50" : undefined}>
                  {row.getVisibleCells().map((cell) => (
                    <Td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Td>
                  ))}
                </Tr>
              ))
            ) : (
              <Tr>
                <Td colSpan={columns.length} textAlign="center" height="24">
                  No results.
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </Box>
      <Flex alignItems="center" justifyContent="end" py={4} gap={2}>
        <Text flex="1" fontSize="sm" color="gray.600">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </Text>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          isDisabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          isDisabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </Flex>
    </Box>
  )
}
export default DataTableDemo
