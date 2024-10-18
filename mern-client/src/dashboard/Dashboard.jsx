import React from 'react'
import { Table } from "flowbite-react";

const Dashboard = () => {
  return (
    <div>
      <Table>
        <Table.Head>
          <Table.HeadCell>Total Book</Table.HeadCell>
          <Table.HeadCell>New Book</Table.HeadCell>
          <Table.HeadCell> Total Order</Table.HeadCell>


        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'25'}
            </Table.Cell>
            <Table.Cell>10</Table.Cell>
            <Table.Cell>5</Table.Cell>

          </Table.Row>

        </Table.Body>
      </Table>
    </div>
  )
}

export default Dashboard