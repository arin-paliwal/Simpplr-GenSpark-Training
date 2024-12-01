import React from 'react'
import OrgChart from '@dabeng/react-org-chart'

interface Employee {
  id: number
  name: string
  title: string
  img: string
  children?: Employee[]
}

const organizationData: Employee = {
  id: 1,
  name: "Cameron Williamson",
  title: "Founder - CEO",
  img: "https://avatar.iran.liara.run/public/4",
  children: [
    {
      id: 2,
      name: "Leslie Alexander",
      title: "Head of Project Manager",
      img: "https://avatar.iran.liara.run/public/4",
      children: [
        {
          id: 5,
          name: "Cody Firmansyah",
          title: "Senior Project Manager",
          img: "https://avatar.iran.liara.run/public/4",
        },
        {
          id: 6,
          name: "Jenni William",
          title: "Project Manager",
          img: "https://avatar.iran.liara.run/public/4",
        }
      ]
    },
    {
      id: 3,
      name: "Brooklyn Simmons",
      title: "Creative Director",
      img: "https://avatar.iran.liara.run/public/4",
      children: [
        {
          id: 7,
          name: "Ralph Edwards",
          title: "Senior UX Designer",
          img: "https://avatar.iran.liara.run/public/4",
        },
        {
          id: 8,
          name: "Brooklyn Hehe",
          title: "Senior Graphic Design",
          img: "https://avatar.iran.liara.run/public/4",
        },
        {
          id: 9,
          name: "Vidi Guillerezz",
          title: "UX Designer",
          img: "https://avatar.iran.liara.run/public/4",
        },
        {
          id: 10,
          name: "Pablo Hive",
          title: "Graphic Design",
          img: "https://avatar.iran.liara.run/public/4",
        }
      ]
    },
    {
      id: 4,
      name: "Cody Fisher",
      title: "Head of Development",
      img: "https://avatar.iran.liara.run/public/4",
      children: [
        {
          id: 11,
          name: "Aathor Mulyani",
          title: "Senior Front-End",
          img: "https://avatar.iran.liara.run/public/4",
        },
        {
          id: 12,
          name: "Jenny Wilson",
          title: "QA Engineering",
          img: "https://avatar.iran.liara.run/public/4",
        },
        {
          id: 13,
          name: "Eden Khoiruddin",
          title: "Back-End",
          img: "https://avatar.iran.liara.run/public/4",
        }
      ]
    }
  ]
}

const NodeTemplate: React.FC<{ nodeData: Employee }> = ({ nodeData }) => {
  return (
    <div className="relative group">
      <div className="flex flex-col items-center p-2 bg-white dark:bg-darkMode-secondaryBackground border border-borders-primary rounded-lg shadow-sm">
        <img
          src={nodeData.img}
          alt={nodeData.name}
          width={40}
          height={40}
          className="rounded-full mb-2"
        />
        <div className="text-center">
          <div className="font-medium text-sm text-lightMode-primaryText dark:text-darkMode-primaryText">
            {nodeData.name}
          </div>
          <div className="text-xs text-lightMode-secondaryText dark:text-darkMode-secondaryText">
            {nodeData.title}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function OrganizationChart() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-lightMode-primaryText dark:text-darkMode-primaryText">
          Organization Chart
        </h2>
        <button className="px-4 py-2 flex items-center gap-2 text-lightMode-primaryText dark:text-darkMode-primaryText border border-borders-primary rounded-lg hover:bg-lightMode-secondaryBackground dark:hover:bg-darkMode-secondaryBackground">
          Edit Organization
        </button>
      </div>
      
      <div className="bg-white dark:bg-darkMode-secondaryBackground rounded-lg border border-borders-primary p-8 overflow-x-auto">
        <div className="min-w-[800px] flex justify-center">
          <OrgChart
            datasource={organizationData}
            chartClass="org-chart"
            NodeTemplate={NodeTemplate}
            pan={true}
            zoom={true}
          />
        </div>
      </div>
    </div>
  )
}

