import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  BarChart3,
  Home,
  LogOut,
  Package,
  Settings,
  ShoppingCart,
  Users,
  UserPlus,
  Menu,
  X,
} from "lucide-react";

const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const Button = ({
  children,
  variant = "default",
  size = "default",
  className = "",
  onClick,
}) => {
  const variantStyles = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline:
      "border border-gray-300 bg-transparent hover:bg-gray-100 text-gray-800",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-800",
    icon: "p-2 rounded-full border border-gray-300 bg-transparent hover:bg-gray-100",
  };

  const sizeStyles = {
    default: "py-2 px-4",
    sm: "py-1 px-3 text-sm",
    lg: "py-3 px-6 text-lg",
    icon: "p-2",
  };

  return (
    <button
      className={`rounded-md font-medium transition-colors ${
        variantStyles[variant]
      } ${sizeStyles[size === "icon" ? "icon" : size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

 
const Sheet = ({ children, open, onOpenChange }) => {
  return <div>{children}</div>;
};

const SheetTrigger = ({ asChild, children }) => {
  return children;
};

const SheetContent = ({ side = "right", className = "", children }) => {
  const sideStyles = {
    right: "right-0",
    left: "left-0",
    top: "top-0 left-0 right-0",
    bottom: "bottom-0 left-0 right-0",
  };

  return (
    <div
      className={`fixed top-0 ${sideStyles[side]} h-full bg-white shadow-xl z-50 transform transition-transform duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

const SheetHeader = ({ className = "", children }) => {
  return <div className={`py-4 ${className}`}>{children}</div>;
};

const SheetTitle = ({ children }) => {
  return <h3 className="text-lg font-semibold">{children}</h3>;
};

const navigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: Home },
  { name: "Products", href: "/admin/products", icon: Package },
  { name: "Orders", href: "/admin/orders", icon: ShoppingCart },
  { name: "Customers", href: "/admin/customers", icon: Users },
  { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { name: "Create Admin", href: "/admin/create-admin", icon: UserPlus },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

const isAdmin = async () => {
 //check if admin is valid 
  return true;
};

const signOut = async () => {
  //logout logic here
  return;
};

export default function AdminLayout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    checkAuth();
  }, [navigate]);

  const checkAuth = async () => {
    try {
      const isAdminUser = await isAdmin();
      if (!isAdminUser) {
        navigate("/admin/login", { replace: true });
      }
    } catch (error) {
      console.error("Auth check error:", error);
      navigate("/admin/login", { replace: true });
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/admin/login", { replace: true });
  };

  // Custom NavLink component
  const NavLink = ({ item }) => {
    const isActive = location.pathname === item.href;
    return (
      <Link
        to={item.href}
        className={cn(
          "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors",
          isActive
            ? "bg-brightGreen text-white"
            : "text-gray-500 hover:bg-gray-100"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <item.icon className="h-4 w-4" />
        {item.name}
      </Link>
    );
  };


  const MobileMenu = () => {
    if (!isMobileMenuOpen) return null;

    return (
      <div
        className="fixed inset-0 z-50 bg-black bg-opacity-50"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className="fixed top-0 left-0 w-64 h-full bg-white shadow-xl transform transition-transform duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 border-b flex justify-between items-center">
            <h3 className="text-lg font-semibold">Admin Panel</h3>
            <button
              className="p-1 rounded-full hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-col gap-1 p-2">
            {navigation.map((item) => (
              <NavLink key={item.name} item={item} />
            ))}
            <button
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-500 hover:bg-gray-100 w-full text-left"
              onClick={handleSignOut}
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="lg:hidden fixed top-4 left-4 z-40">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>


      <MobileMenu />


      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
        <div className="flex flex-col flex-grow pt-5 bg-white border-r h-full">
          <div className="flex items-center justify-between flex-shrink-0 px-4">
            <Link to="/admin/dashboard" className="font-bold text-xl">
              Admin Panel
            </Link>
          </div>
          <div className="mt-8 flex-grow flex flex-col">
            <nav className="flex-1 px-2 pb-4 space-y-1">
              {navigation.map((item) => (
                <NavLink key={item.name} item={item} />
              ))}
            </nav>
            <div className="p-4">
              <button
                className="w-full flex items-center justify-start px-3 py-2 text-sm font-medium rounded-md text-gray-500 border border-gray-300 hover:bg-gray-100"
                onClick={handleSignOut}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="lg:pl-64">
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
