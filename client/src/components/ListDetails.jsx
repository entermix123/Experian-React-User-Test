import { useState, useEffect } from "react";

const BASE_URL = "http://localhost:3030/data/users";

const UserTable = () => {
    const [users, setUsers] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchUsers();
    }, [currentPage]);

    const fetchUsers = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${BASE_URL}?page=${currentPage}`);
            const data = await response.json();
            // console.log(data);
            const { count, results } = data
            setUsers(results || []);
            setTotalCount(count || 0);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const totalPages = Math.ceil(totalCount / 10);

    const handlePageChange = (direction) => {
        let newPage = currentPage;
        if (direction === "first") {
            newPage = 0;
        } else if (direction === "previous") {
            newPage = Math.max(currentPage - 1, 0);
        } else if (direction === "next") {
            newPage = Math.min(currentPage + 1, totalPages - 1);
        } else if (direction === "last") {
            newPage = totalPages - 1;
        }
        setCurrentPage(newPage);
    };

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                <button
                    className="first-page-btn"
                    onClick={() => handlePageChange("first")}
                    disabled={isLoading || currentPage === 0}
                >
                    first
                </button>
                <button
                    className="previous-page-btn"
                    onClick={() => handlePageChange("previous")}
                    disabled={isLoading || currentPage === 0}
                >
                    previous
                </button>
                <button
                    className="next-page-btn"
                    onClick={() => handlePageChange("next")}
                    disabled={isLoading || currentPage === totalPages - 1}
                >
                    next
                </button>
                <button
                    className="last-page-btn"
                    onClick={() => handlePageChange("last")}
                    disabled={isLoading || currentPage === totalPages - 1}
                >
                    last
                </button>
            </div>
        </div>
    );
};

export default UserTable;