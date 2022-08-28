import { NextPage } from "next";

const ChoosePostTypePage: NextPage = () => {
    return <div className="grid flex-1 place-items-center pt-4 pb-8">
        <div className="alert alert-warning mb-4 w-10/12 shadow-lg sm:mb-0 sm:w-1/2">
          <div>
            <span>Tip from the wizard 🧙‍♂️: Choose wisely as you cannot change it later!</span>
          </div>
        </div>
        <div className="flex w-screen flex-col items-center gap-6 sm:flex-row sm:items-stretch sm:justify-center">
            <div id="Article" className="card prose flex h-auto w-3/4 flex-col bg-neutral p-6 py-4 sm:w-1/4">
                <h1 className="mb-4 text-center">ARTICLE</h1>
                <span>Choose this option if you want to write:</span>
                <ul className="m-0 mb-8 text-start">
                    <li>A homebrew rule</li>
                    <li>A new trap idea or rule</li>
                    <li>An article about RPG</li>
                    <li>A puzzle idea</li>
                    <li>Anything that {"couldn't"} be a creature</li>
                </ul>
                
                <button className="btn btn-primary mt-auto">WRITE AN ARTICLE</button>
            </div>
            
            <div id="Creature" className="card prose flex h-auto w-3/4 flex-col bg-neutral p-6 py-4 sm:w-1/4 sm:items-stretch">
                <h1 className="mb-4 text-center">CREATURE</h1>
                <span>Choose this option if you want to write:</span>
                <ul className="m-0 mb-8 text-start">
                    <li>A new <strong>creature</strong></li>
                    <li>A <strong>NPC</strong> from your campaign that have stats</li>
                    <li>Your own <strong>PCs</strong> to have their sheets stored here</li>
                </ul>
                
                
                
                <button className="btn btn-primary mt-auto">WRITE A CREATURE</button>
            </div>
        </div>
    </div>
}

export default ChoosePostTypePage