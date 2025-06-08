"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Plus, Edit, Trash2, Search, UserCheck, Shield } from "lucide-react"


interface UserManagementModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function UserManagementModal({ open, onOpenChange }: UserManagementModalProps) {
  const [activeTab, setActiveTab] = useState("users")
  const [searchTerm, setSearchTerm] = useState("")

  const users = [
    { id: 1, name: "Juan Pérez", email: "juan@ejemplo.com", role: "client", status: "active", lastLogin: "2024-01-15" },
    {
      id: 2,
      name: "María García",
      email: "maria@empresa.com",
      role: "employee",
      status: "active",
      lastLogin: "2024-01-14",
    },
    {
      id: 3,
      name: "Carlos López",
      email: "carlos@cliente.com",
      role: "client",
      status: "inactive",
      lastLogin: "2024-01-10",
    },
    { id: 4, name: "Ana Martínez", email: "ana@admin.com", role: "admin", status: "active", lastLogin: "2024-01-16" },
  ]

  const roles = [
    { id: 1, name: "Administrador", permissions: ["Gestión total", "Configuración", "Reportes"], users: 2 },
    { id: 2, name: "Empleado", permissions: ["Gestión de citas", "Clientes", "Servicios"], users: 15 },
    { id: 3, name: "Cliente", permissions: ["Reservar citas", "Ver historial", "Calificar"], users: 234 },
  ]

  const permissions = [
    { id: 1, name: "Gestión de Usuarios", description: "Crear, editar y eliminar usuarios" },
    { id: 2, name: "Gestión de Citas", description: "Programar y modificar citas" },
    { id: 3, name: "Reportes Avanzados", description: "Acceso a estadísticas y reportes" },
    { id: 4, name: "Configuración del Sistema", description: "Modificar configuraciones globales" },
    { id: 5, name: "Gestión de Servicios", description: "Crear y modificar servicios" },
  ]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Users className="h-5 w-5 mr-2" />
            Gestión de Usuarios y Permisos
          </DialogTitle>
          <DialogDescription>Administra usuarios, roles y permisos del sistema.</DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="users">Usuarios</TabsTrigger>
            <TabsTrigger value="roles">Roles</TabsTrigger>
            <TabsTrigger value="permissions">Permisos</TabsTrigger>
          </TabsList>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Buscar usuarios..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Nuevo Usuario
              </Button>
            </div>

            <div className="border rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Usuario</TableHead>
                    <TableHead>Rol</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Último Acceso</TableHead>
                    <TableHead>Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-gray-600">{user.email}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            user.role === "admin" ? "destructive" : user.role === "employee" ? "default" : "secondary"
                          }
                        >
                          {user.role === "admin" ? "Admin" : user.role === "employee" ? "Empleado" : "Cliente"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={user.status === "active" ? "default" : "secondary"}>
                          {user.status === "active" ? "Activo" : "Inactivo"}
                        </Badge>
                      </TableCell>
                      <TableCell>{user.lastLogin}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          {/* Roles Tab */}
          <TabsContent value="roles" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Gestión de Roles</h3>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Nuevo Rol
              </Button>
            </div>

            <div className="grid gap-4">
              {roles.map((role) => (
                <Card key={role.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center">
                          <UserCheck className="h-5 w-5 mr-2" />
                          {role.name}
                        </CardTitle>
                        <CardDescription>{role.users} usuarios asignados</CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Permisos:</p>
                      <div className="flex flex-wrap gap-2">
                        {role.permissions.map((permission, index) => (
                          <Badge key={index} variant="outline">
                            {permission}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Permissions Tab */}
          <TabsContent value="permissions" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Gestión de Permisos</h3>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Nuevo Permiso
              </Button>
            </div>

            <div className="grid gap-4">
              {permissions.map((permission) => (
                <Card key={permission.id}>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start">
                      <div className="flex items-start space-x-3">
                        <Shield className="h-5 w-5 mt-1 text-blue-600" />
                        <div>
                          <h4 className="font-medium">{permission.name}</h4>
                          <p className="text-sm text-gray-600">{permission.description}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
