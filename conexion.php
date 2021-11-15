<?php
    class conexion{
        private $servidor;
        private $usuario;
        private $contraseña;
        private $db;
        public $conexion;
        public function __construct(){
            $this->servidor = "localhost";
            $this->usuario = "invernadero";
            $this->contraseña = "Ju@nma0816";
            $this->db = "Invernadero";
        }
        function conectar(){
            $this-> conexion = new mysqli($this->servidor,$this->usuario,$this->contraseña,$this->db);
            $this->conexion->set_charset("utf8");
        }
        function cerrar(){
            $this->conexion->close();
        }
    }
    class ModeloGrafico{
        private $conexion;
        function __construct(){
            $this->conexion = new conexion();
        }
        function TraerDatos(){
            $this->conexion->conexion->conectar();
            $sql = "SELECT * FROM Datos";
            $arreglo = array();
            if($consulta = $this->conexion->conexion->query($sql)){
                while($consulta_VU = mysqli_fetch_array($consulta)){
                    $arreglo[] = $consulta_VU;
                }
            }
            $this->conexion->cerrar();
            return $arreglo;
        }
    }
    $MG = new ModeloGrafico();
    $nuevosdatos = $MG->TraerDatos();
    echo 'hola mundo';
    echo json_encode($nuevosdatos);
?>