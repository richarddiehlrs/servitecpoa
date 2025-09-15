import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="bg-gray-50 py-3 border-b">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link 
              href="/" 
              className="text-gray-500 hover:text-[#1E3A5F] transition-colors flex items-center"
            >
              <Home size={16} className="mr-1" />
              Início
            </Link>
          </li>
          
          {items.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              <ChevronRight size={16} className="text-gray-400" />
              {item.href ? (
                <Link 
                  href={item.href}
                  className="text-gray-500 hover:text-[#1E3A5F] transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-[#1E3A5F] font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
