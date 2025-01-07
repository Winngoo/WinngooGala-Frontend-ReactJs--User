import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const PageHeader = () => {
    return (
        <div className="block justify-between py-5 md:flex pl-10">
            <div>
                <h3 className="hover:text-gray-900 dark:text-white dark:hover:text-white text-2xl font-medium text-primary"> Profile Settings</h3>
            </div>
        </div>
    );
};

export default PageHeader;