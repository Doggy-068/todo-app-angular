import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

@Component({
  standalone: true,
  selector: 'view-three',
  templateUrl: './three.component.html'
})
export class ViewThreeComponent implements AfterViewInit {
  @ViewChild('container') container!: ElementRef<HTMLCanvasElement>

  ngAfterViewInit(): void {
    const renderer = new THREE.WebGLRenderer({ canvas: this.container.nativeElement })
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 2, 0.1, 100)
    camera.position.z = 50
    const light = new THREE.PointLight(0xffffff, 1)
    scene.add(light)
    const sunMesh = new THREE.Mesh(new THREE.SphereGeometry(3), new THREE.MeshPhongMaterial({ emissive: 0xff9800 }))
    scene.add(sunMesh)
    const earthMesh = new THREE.Mesh(new THREE.SphereGeometry(2), new THREE.MeshPhongMaterial({ color: 0x3f51b5 }))
    earthMesh.position.x = 20
    sunMesh.add(earthMesh)
    const moonMesh = new THREE.Mesh(new THREE.SphereGeometry(1), new THREE.MeshPhongMaterial({ color: 0xffef62 }))
    moonMesh.position.x = 6
    earthMesh.add(moonMesh)
    new OrbitControls(camera, renderer.domElement)
    const resizeRendererToDisplay = (renderer: THREE.Renderer) => {
      const canvas = renderer.domElement
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      const needResize = canvas.width !== width || canvas.height !== height
      if (needResize) {
        renderer.setSize(width, height, false)
      }
      return needResize
    }
    const render = (time: number) => {
      time *= 0.001
      if (resizeRendererToDisplay(renderer)) {
        const canvas = renderer.domElement
        camera.aspect = canvas.clientWidth / canvas.clientHeight
        camera.updateProjectionMatrix()
      }
      sunMesh.rotation.z = time
      earthMesh.rotation.z = time
      renderer.render(scene, camera)
      requestAnimationFrame(render)
    }
    requestAnimationFrame(render)
  }
}
