import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';
import { kanbanData, kanbanGrid } from '../data/dummy';


// Renders the Kanban page, that displays the syncfusion Kanban component
// At the moment the component is populated with dummy data for displaying purposes.

const Kanban = () => {

  return (

  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <KanbanComponent
      id="kanban"
      keyField="Status"
      dataSource={kanbanData}
      cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
    >
      <ColumnsDirective>
        {kanbanGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
      </ColumnsDirective>
    </KanbanComponent>
  </div>
)}

export default Kanban;