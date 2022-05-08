import { React } from 'react';

function NavigationBar() {

    return (
        <div className="mx-auto px-2 sm:px-6 lg:px-8 bg-black w-full" data-testid="navbar">
            <div className="relative flex items-center justify-between h-16">
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex-shrink-0 flex items-center">
                        <img
                            className="hidden lg:block h-8 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt="Workflow"
                        />
                        <h1 className="text-3xl p-4 text-white" > Patient Dashboard</h1>

                    </div>
                </div>

            </div>
        </div >
    );
}

export default NavigationBar;