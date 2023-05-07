import React from "react";
// library for icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
// import data of a table from the corresponding json file
import mappings from './jsons/RosettaStone.json'

// function for a single field name mapping
// newFieldLink is the link that navigates to the new data table
function FieldMapping({ oldFieldName, newFieldName, newFieldLink }) {
    return (
        <div key={oldFieldName} className="flex items-center justify-center mb-2 mr-4">
            <span className="text-black mr-2">{oldFieldName}</span>
            <span className="flex-1 h-px bg-gray-300 flex items-center justify-center">
                <FontAwesomeIcon icon={faArrowRightLong} className="text-black" />
            </span>
            <a href={newFieldLink} className="ml-2 text-indigo-600 underline">
            <span className="ml-2 text-sky-700 underline">{newFieldName}</span>
            </a>
        </div>
    )
}


export default function FieldMappings() {
    return (
        <div className="mb-10">
            <header className="bg-gradient-to-r from-purple-500 to-indigo-500">
            <div className="container mx-auto text-center py-10">
                <div className="py-10">
                <h1 className="text-white text-4xl font-bold mb-3">Data Migration</h1>
                <p className="text-white text-6xl font-bold">Legacy Table <FontAwesomeIcon icon={faArrowRightLong} className="mx-2 text-white" /> Modernized Table</p>
                </div>
            </div>
            </header>
            <div className="container px-20 py-8 bg-gray-100 rounded-lg shadow-lg">
                <div className="space-y-10">
                    {mappings.map((mapping, index) => (
                        <FieldMapping
                            key={index}
                            oldFieldName={mapping.oldFieldName}
                            newFieldName={mapping.newFieldName}
                            newFieldLink={mapping.newFieldLink}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
  }
  