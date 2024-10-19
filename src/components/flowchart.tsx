"use client"; // Add this line to make it a client component

export default function Flowchart() {
  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <div className="bg-blue-500 text-white p-4 rounded shadow-lg">
        Bright Light Exposure
      </div>
      <div className="arrow">&#8595;</div> {/* Updated arrow */}
      <div className="bg-green-500 text-white p-4 rounded shadow-lg">
        Activation of Optic Nerve
      </div>
      <div className="arrow">&#8595;</div> {/* Updated arrow */}
      <div className="bg-yellow-500 text-white p-4 rounded shadow-lg">
        Signal Sent to Brain
      </div>
      <div className="arrow">&#8595;</div> {/* Updated arrow */}
      <div className="bg-orange-500 text-white p-4 rounded shadow-lg">
        Crossed Signal to Trigeminal Nerve
      </div>
      <div className="arrow">&#8595;</div> {/* Updated arrow */}
      <div className="bg-red-500 text-white p-4 rounded shadow-lg">
        Triggering of Sneezing Reflex
      </div>

      <style jsx>{`
        .arrow {
          font-size: 24px;
          color: black;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
}
