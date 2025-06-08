"use client"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, TrendingUp, Users, Calendar, DollarSign, Star, Clock, Target } from "lucide-react"

interface StatisticsModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function StatisticsModal({ open, onOpenChange }: StatisticsModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <BarChart3 className="h-5 w-5 mr-2" />
            Estadísticas y Reportes
          </DialogTitle>
          <DialogDescription>Panel completo de métricas y análisis del sistema.</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* KPIs Principales */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Ingresos Totales</p>
                    <p className="text-3xl font-bold text-green-600">$45,230</p>
                    <p className="text-sm text-green-600">+12.5% vs mes anterior</p>
                  </div>
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Citas Completadas</p>
                    <p className="text-3xl font-bold text-blue-600">1,234</p>
                    <p className="text-sm text-blue-600">+8.2% vs mes anterior</p>
                  </div>
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Clientes Activos</p>
                    <p className="text-3xl font-bold text-purple-600">892</p>
                    <p className="text-sm text-purple-600">+15.3% vs mes anterior</p>
                  </div>
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Satisfacción</p>
                    <p className="text-3xl font-bold text-orange-600">4.8/5</p>
                    <p className="text-sm text-orange-600">+0.3 vs mes anterior</p>
                  </div>
                  <Star className="h-8 w-8 text-orange-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Gráficos Simulados */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Gráfico de Ingresos */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Ingresos Mensuales
                </CardTitle>
                <CardDescription>Evolución de ingresos en los últimos 6 meses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-t from-green-100 to-green-50 rounded-lg flex items-end justify-center p-4">
                  <div className="text-center">
                    <BarChart3 className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <p className="text-lg font-semibold text-green-700">Gráfico de Barras</p>
                    <p className="text-sm text-green-600">Ingresos por mes</p>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Enero:</span>
                        <span className="font-medium">$8,450</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Febrero:</span>
                        <span className="font-medium">$9,230</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Marzo:</span>
                        <span className="font-medium">$7,890</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gráfico de Citas */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Citas por Servicio
                </CardTitle>
                <CardDescription>Distribución de citas por tipo de servicio</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-t from-blue-100 to-blue-50 rounded-lg flex items-center justify-center p-4">
                  <div className="text-center">
                    <Target className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                    <p className="text-lg font-semibold text-blue-700">Gráfico Circular</p>
                    <p className="text-sm text-blue-600">Distribución por servicios</p>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                          <span>Cortes</span>
                        </div>
                        <span className="font-medium">45%</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                          <span>Masajes</span>
                        </div>
                        <span className="font-medium">30%</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                          <span>Manicure</span>
                        </div>
                        <span className="font-medium">25%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Métricas Adicionales */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Horarios Populares
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">10:00 - 12:00</span>
                    <Badge variant="default">Alta demanda</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">14:00 - 16:00</span>
                    <Badge variant="default">Alta demanda</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">16:00 - 18:00</span>
                    <Badge variant="secondary">Media demanda</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">18:00 - 20:00</span>
                    <Badge variant="outline">Baja demanda</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Top Empleados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">María López</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-sm">4.9</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Dr. Rodríguez</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-sm">4.8</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Sofia Chen</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-sm">4.7</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Tendencias
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Nuevos clientes</span>
                    <span className="text-sm text-green-600">+23%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Retención</span>
                    <span className="text-sm text-green-600">+15%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Cancelaciones</span>
                    <span className="text-sm text-red-600">-8%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Tiempo promedio</span>
                    <span className="text-sm text-blue-600">45 min</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
