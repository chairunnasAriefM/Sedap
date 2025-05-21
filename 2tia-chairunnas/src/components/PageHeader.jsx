export default function PageHeader({ children, title }) {
    return (
        <div id="pageheader-container" className="flex items-center justify-between p-4">
            <title>{title}</title>
            <div id="pageheader-left" className="flex flex-col">
                <span id="page-title" className="text-3xl font-semibold">
                    {title}
                </span>
                <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2">
                    <span id="breadcrumb-home" className="text-gray-500">Dashboard</span>
                    <span id="breadcrumb-separator" className="text-gray-500">/</span>
                    <span id="breadcrumb-current" className="text-gray-500">{title} List</span>
                </div>
            </div>
            <div id="action-button" className="flex gap-3">
                {children}
            </div>
        </div>
    );
}
