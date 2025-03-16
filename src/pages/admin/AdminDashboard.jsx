import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Loader2,
  Package,
  ShoppingCart,
  DollarSign,
  ShoppingBag,
  ChevronRight,
} from "lucide-react";

//custom ui components
const Card = ({ className, children }) => {
  return (
    <div
      className={`bg-white rounded-lg border border-gray-200 shadow ${className}`}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ children }) => {
  return <div className="p-6 pb-0">{children}</div>;
};

const CardContent = ({ className, children }) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};

const CardTitle = ({ children }) => {
  return <h3 className="text-lg font-semibold">{children}</h3>;
};

const CardDescription = ({ children }) => {
  return <p className="text-sm text-gray-500 mt-1">{children}</p>;
};

const Tabs = ({ defaultValue, children }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <div className="w-full">
      {React.Children.map(children, (child) => {
        if (child.type === TabsList || child.type === TabsContent) {
          return React.cloneElement(child, { activeTab, setActiveTab });
        }
        return child;
      })}
    </div>
  );
};

const TabsList = ({ activeTab, setActiveTab, children }) => {
  return (
    <div className="flex space-x-1 rounded-md bg-gray-100 p-1">
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          activeTab,
          setActiveTab,
        });
      })}
    </div>
  );
};

const TabsTrigger = ({ value, activeTab, setActiveTab, children }) => {
  return (
    <button
      className={`px-3 py-1.5 text-sm font-medium rounded-md ${
        activeTab === value
          ? "bg-white shadow"
          : "text-gray-600 hover:text-gray-900"
      }`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );
};

const TabsContent = ({ value, activeTab, children }) => {
  if (value !== activeTab) return null;
  return <div>{children}</div>;
};

const Button = ({
  variant = "default",
  size = "default",
  className,
  onClick,
  children,
}) => {
  const variantStyles = {
    default: "products-600 text-white hover:products-700",
    ghost: "bg-transparent hover:bg-gray-100",
  };

  const sizeStyles = {
    default: "px-4 py-2",
    sm: "px-2 py-1 text-sm",
  };

  return (
    <button
      className={`rounded-md font-medium transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Overview = () => {
  // Sample data for the chart
  const data = [
    { name: "Jan", revenue: 4000 },
    { name: "Feb", revenue: 3000 },
    { name: "Mar", revenue: 2000 },
    { name: "Apr", revenue: 2780 },
    { name: "May", revenue: 1890 },
    { name: "Jun", revenue: 2390 },
    { name: "Jul", revenue: 3490 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="revenue" fill="#386641" />
      </BarChart>
    </ResponsiveContainer>
  );
};

const RecentOrders = ({ orders }) => {
  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <div key={order.id} className="flex items-center justify-between">
          <div>
            <h4 className="font-medium">Order #{order.id}</h4>
            <p className="text-sm text-gray-500">
              {new Date(order.created_at).toLocaleDateString()}
            </p>
          </div>
          <div className="text-right">
            <p className="font-medium">{formatNPR(order.total)}</p>
            <p className={`text-sm ${getStatusColor(order.status)}`}>
              {order.status}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const formatNPR = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NPR",
    minimumFractionDigits: 0,
  }).format(amount);
};

const getStatusColor = (status) => {
  switch (status) {
    case "PENDING":
      return "text-yellow-600";
    case "COMPLETED":
      return "text-green-600";
    case "CANCELLED":
      return "text-red-600";
    default:
      return "text-gray-600";
  }
};

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [ordersData, setOrdersData] = useState({ data: [], isLoading: true });
  const [productsData, setProductsData] = useState({
    data: [],
    isLoading: true,
  });

  const containerAnimation = "transition-opacity duration-500";
  const itemAnimation = "transition-all duration-300 opacity-0 translate-y-5";

  useEffect(() => {
    //fetching order data here
    setTimeout(() => {
      if (ordersData.isLoading) {
        setOrdersData({
          data: [
            {
              id: "001",
              total: 4500,
              status: "PENDING",
              created_at: new Date(),
            },
            {
              id: "002",
              total: 2300,
              status: "COMPLETED",
              created_at: new Date(),
            },
            {
              id: "003",
              total: 5600,
              status: "PENDING",
              created_at: new Date(),
            },
            {
              id: "004",
              total: 1800,
              status: "CANCELLED",
              created_at: new Date(),
            },
            {
              id: "005",
              total: 3200,
              status: "COMPLETED",
              created_at: new Date(),
            },
          ],
          isLoading: false,
        });
      }

      if (productsData.isLoading) {
        setProductsData({
          data: [
            { id: "001", name: "Product 1", stock: 15, price: 1200 },
            { id: "002", name: "Product 2", stock: 8, price: 2200 },
            { id: "003", name: "Product 3", stock: 23, price: 850 },
            { id: "004", name: "Product 4", stock: 5, price: 3500 },
          ],
          isLoading: false,
        });
      }
    }, 1000);
  }, []);

  useEffect(() => {
    if (!ordersData.isLoading && !productsData.isLoading) {
      const items = document.querySelectorAll(".dashboard-item");
      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.remove("opacity-0", "translate-y-5");
        }, index * 100);
      });
    }
  }, [ordersData.isLoading, productsData.isLoading]);

  const orders = ordersData.data;
  const products = productsData.data;

  const stats = {
    totalOrders: orders.length,
    totalRevenue: orders.reduce((sum, order) => sum + order.total, 0),
    averageOrderValue: orders.length
      ? orders.reduce((sum, order) => sum + order.total, 0) / orders.length
      : 0,
    pendingOrders: orders.filter((order) => order.status === "PENDING").length,
    totalProducts: products.length,
    lowStock: products.filter((product) => product.stock < 10).length,
    todayOrders: orders.filter((order) => {
      const orderDate = new Date(order.created_at);
      const today = new Date();
      return orderDate.toDateString() === today.toDateString();
    }).length,
  };

  if (ordersData.isLoading || productsData.isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex-1 space-y-6 p-4 md:p-8 bg-gray-50 min-h-screen">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Welcome back, Admin
          </h2>
          <p className="text-gray-500">
            Here's what's happening with your store today.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-500">Last updated:</span>
          <span className="font-medium">{new Date().toLocaleTimeString()}</span>
        </div>
      </div>

      <div
        className={`grid gap-4 md:grid-cols-2 lg:grid-cols-4 ${containerAnimation}`}
      >
        {[
          {
            title: "Total Revenue",
            value: formatNPR(stats.totalRevenue),
            icon: DollarSign,
            color: "green",
            trend: "+20.1% from last month",
          },
          {
            title: "Total Orders",
            value: stats.totalOrders.toString(),
            icon: ShoppingBag,
            color: "blue",
            trend: `${stats.pendingOrders} pending orders`,
          },
          {
            title: "Products",
            value: stats.totalProducts.toString(),
            icon: Package,
            color: "purple",
            trend: `${stats.lowStock} low stock items`,
          },
          {
            title: "Today's Orders",
            value: stats.todayOrders.toString(),
            icon: ShoppingCart,
            color: "yellow",
            trend: new Date().toLocaleDateString(),
          },
        ].map((stat) => (
          <div key={stat.title} className={`dashboard-item ${itemAnimation}`}>
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <div className={`bg-${stat.color}-100 p-3 rounded-full`}>
                    <stat.icon className={`h-5 w-5 text-${stat.color}-600`} />
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-600">{stat.trend}</div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>
              Your store's financial performance over time
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <Overview />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Orders</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/admin/orders")}
              >
                View all
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <CardDescription>Latest customer purchases</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentOrders orders={orders.slice(0, 5)} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
